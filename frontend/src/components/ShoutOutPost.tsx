import ShoutOut from "../model/ShoutOut";

interface Props {
    shoutOut: ShoutOut;
}

function ShoutOutPost({ shoutOut }: Props) {
    return (
        <div className="ShoutOutPost">
            <h2>Shout out to {shoutOut.to}</h2>
            <h3> from {shoutOut.from}</h3>
            <p>{shoutOut.message}</p>

        </div>
    )
}

export default ShoutOutPost;