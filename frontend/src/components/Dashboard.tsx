import { useEffect, useState } from "react";

interface Props {
    endpoints: RequestInfo[];
}

export default ({ endpoints }: Props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any[]>([]);

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
                setData(responses);
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : "Erro desconhecido"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoints]);

    return (
        <main>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>Ocorreu um erro: {error}</p>}

            {!loading && !error && (
                <div>
                    {data.map((dataset, index) => (
                        <div key={index}>
                            <h3>Dados da API {index + 1}</h3>
                            <pre>{JSON.stringify(dataset, null, 2)}</pre>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};
