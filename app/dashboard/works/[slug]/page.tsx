import { createWork, deleteWork, getAllWorks, updateWork } from "@/app/libs/actions/works"
import ServerUploadPage from "@/app/ui/upload"

export default async function Page() {
    const totalWorks = await getAllWorks();
    return (
        <main>
            <p>Page Dashboard/upload</p>
            <p>Créer une catégorie</p>
            <form action={createWork}>
                <input className="text-red-500" type="text" placeholder="votre nom" name="title"></input>
                <input type="submit" value="valider"/>
            </form>
            <br/>
            <hr/>
            <br/>
            <p>Update</p>
            <form action={updateWork}>
                <input className="text-orange-500" type="text" placeholder="NewName" name="title"></input>
                <select name="id">

                {totalWorks.map((work, index) => 
                    <option key={work.id} value={work.id}>{work.title}</option>
                )}
                </select>
                <input type="submit" value="valider"/>
            </form>
            <br/>
            <hr/>
            <br/>
            <p>Supprimer Catégorie</p>
            <form action={deleteWork}>
                <select name="id">
                    {totalWorks.map((work, index) => 
                        <option key={index} value={work.id}>{work.title}</option>
                    )}
                </select>
                <input type="submit" value="valider"/>
            </form>
        </main>
    )
}