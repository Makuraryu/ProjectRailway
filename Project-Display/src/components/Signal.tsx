import "./Signal.css"
type SignalProps = {
    title: string,
    link: string,
    alias: string
}

type Props = {
    now: SignalProps
    next: SignalProps
    prev: SignalProps
}

function Signal({now, next, prev}: Props) {
    return (
        <div className="sign">
                <div className="title">

                    <a className="stationtitle" href={now.link}>{now.title}</a>
                </div>
                <div className="direction">
                    <a className="next nav" href={next.link}>{next.title}</a>
                    <a className="prev nav" href={prev.link}>{prev.title}</a>
                </div>
                <div className="alias">
                    <p className="titlealia alia">{now.alias}</p>
                    <p className="nextalia alia">{next.alias}</p>
                    <p className="prevalia alia">{prev.alias}</p>

                </div>

            </div>
    );
}
export default Signal