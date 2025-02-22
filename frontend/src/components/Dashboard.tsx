import { useEffect, useState } from "react";

interface Props {
    endpoints: RequestInfo[];
}

export default ({ endpoints }: Props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<[any[], any[]]>([[], []]); // Containers e Imagens
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
            <nav className="text-center bg-sky-800 pb-4 flex justify-center gap-5 text-white">
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

            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>Ocorreu um erro: {error}</p>}

            {!loading && !error && (
                <div>
                    {changeContent ? (
                        <div>
                            {data[0].length > 0 ? (
                                data[0].map((container, index) => (
                                    <div key={index}>
                                        <h3 className="text-lg font-semibold">
                                            Container {index + 1}
                                        </h3>
                                        <pre className="text-sm text-gray-700">
                                            {JSON.stringify(container, null, 2)}
                                        </pre>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center py-8">
                                    Nenhum container encontrado.
                                </p>
                            )}
                        </div>
                    ) : (
                        <div>
                            <div>
                                {data[1].length > 0 ? (
                                    <pre className="text-sm text-gray-700">
                                        {JSON.stringify(data[1], null, 2)}
                                    </pre>
                                ) : (
                                    <p className="text-center py-8">
                                        Nenhuma imagem encontrada.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </main>
    );
};
