import { useEffect, useState } from "react";

export default () => {
    const endpoints = [
        import.meta.env.VITE_API_CONTAINERS,
        import.meta.env.VITE_API_IMAGES
    ];
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<[any[], any[]]>([[], []]);
    const [changeContent, setChangeContent] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    endpoints.map((url) =>
                        fetch(url).then((response) => {
                            if (!response.ok)
                                throw new Error(`Erro ao buscar endpoint`);
                            return response.json();
                        })
                    )
                );
                setData(responses as [any[], any[]]);
            } catch (error) {
                setError(
                    error instanceof Error ? error.message : "Erro desconhecido"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoints]);

    return (
        <main>
            <nav className="text-center pt-4 flex justify-center gap-5 text-4xl font-extrabold">
                <button
                    type="button"
                    className="relative inline-block after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => setChangeContent(true)}
                >
                    Containers
                </button>
                <button
                    type="button"
                    className="relative inline-block after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => setChangeContent(false)}
                >
                    Images
                </button>
            </nav>

            <div className="text-center">
                {loading && <p className="font-extrabold">Carregando...</p>}
                {error && (
                    <p className="font-extrabold">Ocorreu um erro: {error}</p>
                )}
            </div>

            {!loading && !error && (
                <div className="flex justify-center py-5">
                    <div className="text-7xl float-points">
                        <span className="red">.</span>
                        <span className="yellow">.</span>
                        <span className="green">.</span>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg min-w-[300px]">
                        {changeContent ? (
                            <div>
                                {data[0].length > 0 ? (
                                    data[0].map((container, index) => (
                                        <div
                                            key={index}
                                            className="p-4 border-b border-gray-700"
                                        >
                                            <h3 className="text-lg font-semibold">
                                                Container {index + 1}
                                            </h3>
                                            <pre className="text-sm">
                                                {JSON.stringify(
                                                    container,
                                                    null,
                                                    2
                                                )}
                                            </pre>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center py-8 font-extrabold">
                                        Nenhum container encontrado.
                                    </p>
                                )}
                            </div>
                        ) : (
                            <div>
                                {data[1].length > 0 ? (
                                    <pre className="text-sm">
                                        {JSON.stringify(data[1], null, 2)}
                                    </pre>
                                ) : (
                                    <p className="text-center py-8">
                                        Nenhuma imagem encontrada.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};
