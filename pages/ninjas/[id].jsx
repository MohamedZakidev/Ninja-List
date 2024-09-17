
export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    const paths = data.map(ninja => ({
        params: { id: ninja.id.toString() }
    }))

    return { paths: paths, fallback: false }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    return {
        props: { ninja: data }
    }

}

function NinjaDetails({ ninja }) {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    )

}
export default NinjaDetails