type Props = {
    title: string;
    text: string;
}

const Box = ({title, text}: Props) => {
    return (
        <div className={`text-white w-64 h-32 border border-white border-opacity-20 pl-6 pt-5 flex flex-col justify-start`}>
            <h4 className={`opacity-50`}> {title} </h4>
            <h2> {text} </h2>
        </div>
    )
}

export default Box;