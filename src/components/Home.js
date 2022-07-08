import React, {useEffect} from 'react';

const Home = () => {
    const addScript = ({ src, id, onLoad }) => {
        const existing = document.getElementById(id);
        if (existing) {
            return existing;
        } else {
            const script = document.createElement("script");
            script.src = src;
            script.id = id;
            script.async = true;
            script.onload = () => {
                if (onLoad) {
                    onLoad();
                }
            };
            document.body.appendChild(script);
            return script;
        }
    };

    const removeScript = ({ id }) => {
        const script = document.getElementById(id);
        if (script) {
            document.body.removeChild(script);
        }
    };

    useEffect(() => {
        const script = addScript({
            src: `https://staging.terracycle.com/en-US/sdk_v2.js`,
            id: "terracycle"
        });
        return () => removeScript({ id: script.id });
    }, [])

    return (
        <div className="row">
            <div className="col-12">
                <p>
                    This is a sample Home page just to demonstrate routing demo
                </p>
                <div className="terracycle-widget-new" data-type="ocsl" data-resource-id="105d3960-67e1-4b8d-8038-006705393da1"></div>
            </div>
        </div>

    );
}


export { Home };
