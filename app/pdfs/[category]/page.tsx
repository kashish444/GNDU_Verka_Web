// app/pdfs/[category]/page.tsx

interface PageProps {
    params: {
        category: string;
    };
}

export default function PdfCategoryPage({ params }: PageProps) {
    const { category } = params;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 capitalize">{category}</h1>
            <iframe
                src={`/api/pdf/stream?category=${category}`}
                className="w-full h-[80vh] border rounded"
                title="PDF Viewer"
            />
        </div>
    );
}
