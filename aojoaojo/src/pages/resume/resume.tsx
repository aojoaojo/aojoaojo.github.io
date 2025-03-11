import { Layout } from "../../layout/layout"
import resume from "../../assets/cv.pdf"
import "./styles.css"

const PDFViewer = () => {
    return (
        <div className="container-iframe">
            <iframe
                src={resume}
                allowFullScreen={true}
                className="responsive-iframe"
                
            />
        </div>
    );
};
export default PDFViewer;

export function Resume() {
    return (
        <>
            <Layout currentPage={1} />
            <PDFViewer />
        </>
    );
}