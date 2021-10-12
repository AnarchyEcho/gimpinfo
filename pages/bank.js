import { Items } from 'oldschooljs';

export async function getServerSideProps(context) {
    const item = await Items.get("twisted bow")
    console.log(item)
    return {
        props: {
            item
        }
    }
}

export default function Bank() {

    return (
        <div>
            <p>lol</p>
        </div>
    )
}
