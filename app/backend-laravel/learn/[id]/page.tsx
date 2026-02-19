
import { modules } from '@backend/data/materials';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

export default async function ModulePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const module = modules.find((m) => m.id === id);

    if (!module) {
        notFound();
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 border-b border-slate-200 pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">{module.title}</h1>
                <p className="text-lg text-slate-600">{module.description}</p>
            </div>

            <article className="prose prose-slate max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
        prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
        prose-p:text-slate-600
        prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800
        ">
                <Markdown rehypePlugins={[rehypeHighlight]}>
                    {module.content}
                </Markdown>
            </article>

            {/* Navigation Footer for Next Module could go here */}
        </div>
    );
}
