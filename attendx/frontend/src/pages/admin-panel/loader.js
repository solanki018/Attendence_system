import '../../styles/admin-panel/loader.css';

const loader = () => {
    return (
        <div className="custom-loader-overlay">
            <div className="custom-loader">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        </div>
    );
}

export default loader;
