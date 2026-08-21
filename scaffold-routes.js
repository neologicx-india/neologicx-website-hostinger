const fs = require('fs');
const path = require('path');

const routes = [
  '/about-us',
  '/services',
  '/products',
  '/portfolio',
  '/industries',
  '/engagement-models',
  '/blog',
  '/contact',
  '/product-engineering',
  '/custom-software-development',
  '/web-development-design-website',
  '/mobile-app-development-android-ios-flutter',
  '/ecommerce-website-development-shoppingcart',
  '/api-development-services',
  '/whatsapp-chatbot-development',
  '/saas-development-services',
  '/mvp-development-startup',
  '/crm-development-custom-software',
  '/custom-erp-software-service',
  '/wordpress-development-services',
  '/construction-software-mobileapp',
  '/complaint-management-software',
  '/order-management-system',
  '/school-management-software',
  '/portfolio/bikaji',
  '/portfolio/eck-alumni-connect',
  '/portfolio/e-parchi-android',
  '/portfolio/rajuvas',
  '/portfolio/swami-keshwanand-rajasthan-agricultural-university-skrau',
  '/portfolio/eci-app',
  '/portfolio/culture-heritage',
  '/portfolio/jazz-cafe',
  '/portfolio/wus-app-android',
];

const basePath = path.join(__dirname, 'app');

routes.forEach((route) => {
  const fullPath = path.join(basePath, route);
  
  // Create directories if they don't exist
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }

  const filePath = path.join(fullPath, 'page.tsx');
  
  // Prepare a component name (e.g., '/portfolio/bikaji' -> 'PortfolioBikajiPage')
  const componentName = route
    .split('/')
    .filter(Boolean)
    .map((part) => part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(''))
    .join('') + 'Page';

  const content = `import { getDynamicMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return await getDynamicMetadata('${route}');
}

export default function ${componentName}() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-primary">${route}</h1>
      <p className="mt-4 text-muted-foreground">This is a placeholder page. The SEO metadata has been dynamically injected via the mock API.</p>
    </div>
  );
}
`;

  // Write the file (will overwrite if exists, which is fine for our scaffold context)
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
});

// Also update the root page.tsx to include the metadata call
const rootPagePath = path.join(basePath, 'page.tsx');
if (fs.existsSync(rootPagePath)) {
  let rootContent = fs.readFileSync(rootPagePath, 'utf8');
  
  // If not already exporting generateMetadata
  if (!rootContent.includes('export async function generateMetadata')) {
    rootContent = `import { getDynamicMetadata } from '@/lib/metadata';\n\nexport async function generateMetadata() {\n  return await getDynamicMetadata('/');\n}\n\n` + rootContent;
    fs.writeFileSync(rootPagePath, rootContent, 'utf8');
    console.log(`Updated root page metadata: ${rootPagePath}`);
  }
}

console.log('Scaffolding complete.');
