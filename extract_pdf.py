import fitz  # PyMuPDF
import sys

def extract_text(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        with open("pdf_text.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print("Successfully extracted PDF text to pdf_text.txt")
    except Exception as e:
        print(f"Error reading PDF: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        extract_text(sys.argv[1])
    else:
        print("Please provide a PDF path")
