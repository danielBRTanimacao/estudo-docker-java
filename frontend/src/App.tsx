import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

export default () => {
    return (
        <>
            <Header />
            <Dashboard
                endpoints={[
                    import.meta.env.VITE_API_CONTAINERS,
                    import.meta.env.VITE_API_IMAGES
                ]}
            />
        </>
    );
};
