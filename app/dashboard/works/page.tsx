import { getAllWorks, createWork } from "@/app/libs/actions/works";

export default async function Page() {
    const worksList = await getAllWorks();
    return (
        <main>
            <p>Page Dashboard/upload</p>
            <p>Créer une catégorie</p>
            <form action={createWork}>
                <input className="text-red-500" type="text" placeholder="votre nom" name="title"></input>
                <input type="submit" value="valider"/>
            </form>
            <table>
                <thead>
                    <th>#id</th>
                    <th>title</th>
                    <th>user</th>
                    <th>slug</th>
                </thead>
                <tbody>
                    {worksList.map((work) => 
                        <tr key={work.id}>
                            <td>{work.id}</td>
                            <td>{work.title}</td>
                            <td>{work.userId}</td>
                            <td>{work.slug}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}