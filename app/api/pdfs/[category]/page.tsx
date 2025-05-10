interface Props {
    params: {
      category: string;
    };
  }
  
  export default function PdfViewerPage({ params }: Props) {
    const pdfUrl = `/api/pdf/stream?category=${params.category}`;
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 capitalize">{params.category}</h1>
        <iframe
          src={pdfUrl}
          className="w-full h-[85vh] border rounded"
          title="PDF Viewer"
        />
      </div>
    );
  }
  