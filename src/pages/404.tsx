import '../css/404.css'

export default function NotFoundPage() {
    return (
        <>
            <div className="notFound-container">
                <h1 className="errorHeader">404</h1>
                <p className="errorText">
                    This page does not exist or could not be found. Go back to{' '}
                    <a className="error-redirect" href="/">root</a>.
                </p>
            </div>
        </>
    )
}
