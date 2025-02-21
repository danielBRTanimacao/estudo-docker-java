import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

export default () => {
    return (
        <>
            <Header />
            <Dashboard
                endpoints={[
                    "http://127.0.0.1:8080/api/containers",
                    "http://127.0.0.1:8080/api/images"
                ]}
            />
        </>
    );
};
