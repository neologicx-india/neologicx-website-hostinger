import React from 'react';

type TextNode = {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

type LinkNode = {
  type: 'link';
  url: string;
  target?: string;
  children: TextNode[];
};

type Node = TextNode | LinkNode;

type Block = {
  type: 'paragraph' | 'heading' | 'list' | 'list-item' | 'quote' | 'image';
  level?: number;
  format?: 'ordered' | 'unordered';
  children: Node[] | Block[];
};

export default function StrapiRichText({ content }: { content: any[] }) {
  if (!content || !Array.isArray(content)) return null;

  const renderText = (node: TextNode, idx: number) => {
    let el = <>{node.text}</>;
    if (node.bold) el = <strong>{el}</strong>;
    if (node.italic) el = <em>{el}</em>;
    if (node.underline) el = <u>{el}</u>;
    if (node.strikethrough) el = <s>{el}</s>;
    if (node.code) el = <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">{el}</code>;
    return <React.Fragment key={idx}>{el}</React.Fragment>;
  };

  const renderNode = (node: any, idx: number): React.ReactNode => {
    if (node.type === 'text') return renderText(node, idx);
    if (node.type === 'link') {
      return (
        <a key={idx} href={node.url} target={node.target || '_blank'} rel="noopener noreferrer" className="text-primary font-semibold underline decoration-primary/30 hover:decoration-primary transition-all">
          {node.children.map((child: any, i: number) => renderNode(child, i))}
        </a>
      );
    }
    return null;
  };

  const renderBlock = (block: any, idx: number, allBlocks: any[] = []): React.ReactNode => {
    switch (block.type) {
      case 'paragraph':
        // Handle totally empty paragraphs from Strapi by ignoring them
        const isParagraphEmpty = !block.children || block.children.length === 0 || 
                                 (block.children.length === 1 && block.children[0].type === 'text' && (!block.children[0].text || block.children[0].text.trim() === ''));
        if (isParagraphEmpty) return null;
        
        return (
          <p key={idx} className="text-[1.125rem] text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {block.children.map((child: any, i: number) => renderNode(child, i))}
          </p>
        );
      
      case 'heading':
        const HTag = `h${block.level || 2}` as any;
        let className = "";
        if (block.level === 1) className = "text-4xl font-extrabold text-foreground mt-12 mb-6 leading-tight tracking-tight";
        else if (block.level === 2) className = "text-3xl font-extrabold text-foreground mt-10 mb-5 leading-snug tracking-tight";
        else if (block.level === 3) className = "text-2xl font-bold text-foreground mt-8 mb-4 tracking-tight";
        else className = "text-xl font-bold text-foreground mt-6 mb-4";
        
        // Generate ID for Table of Contents
        const extractText = (node: any): string => {
          if (!node) return '';
          if (node.type === 'text') return node.text || '';
          if (Array.isArray(node.children)) return node.children.map(extractText).join('');
          return '';
        };
        const textContent = extractText(block);
        const id = textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

        return (
          <HTag key={idx} id={id} className={className}>
            {block.children.map((child: any, i: number) => {
               if (child.type === 'text' || child.type === 'link') return renderNode(child, i);
               return renderBlock(child, i, allBlocks);
            })}
          </HTag>
        );

      case 'list':
        const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
        // If the next block is also a list of the same type, use mb-2 instead of mb-6 so they look like one continuous list
        const isNextList = allBlocks[idx + 1] && allBlocks[idx + 1].type === 'list' && allBlocks[idx + 1].format === block.format;
        const listMb = isNextList ? 'mb-2' : 'mb-6';
        const listClass = block.format === 'ordered' ? `list-decimal pl-6 space-y-2 ${listMb}` : `list-disc pl-6 space-y-2 ${listMb}`;
        
        return (
          <ListTag key={idx} className={listClass}>
            {block.children.map((child: any, i: number) => renderBlock(child, i, allBlocks))}
          </ListTag>
        );

      case 'list-item':
        // A list item might be totally empty too
        const isListItemEmpty = !block.children || block.children.length === 0 || 
                                (block.children.length === 1 && block.children[0].type === 'text' && (!block.children[0].text || block.children[0].text.trim() === ''));
        if (isListItemEmpty) return null;

        return (
          <li key={idx} className="text-[1.125rem] text-slate-600 dark:text-slate-300 pl-2 marker:text-primary/70 [&_p]:mb-2 [&_p:last-child]:mb-0">
            {block.children.map((child: any, i: number) => {
               if (child.type === 'text' || child.type === 'link') return renderNode(child, i);
               return renderBlock(child, i, allBlocks);
            })}
          </li>
        );
        
      case 'quote':
        return (
          <blockquote key={idx} className="border-l-4 border-primary bg-primary/5 py-5 px-6 my-10 rounded-r-2xl italic text-foreground/90 text-lg shadow-sm">
            {block.children.map((child: any, i: number) => renderNode(child, i))}
          </blockquote>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-none">
      {content.map((block, i) => renderBlock(block, i, content))}
    </div>
  );
}
