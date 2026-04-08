

// export function Button(props) {
export function Button({ content }) {
    return (
        <button className="bg-gradient-to-b from-red-400 to-orange-500 text-white rounded-lg px-8 py-3 md:text-lg text-md hover:scale-105 hover:from-orange-600 cursor-pointer transition-all duration-300">
            { content }
        </button>
    )
}