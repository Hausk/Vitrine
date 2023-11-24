import { getAllUsers } from "@/app/libs/actions/users";

export default async function Page() {
    const usersList = await getAllUsers();
    return (
        <main>
            <p>Page Dashboard/upload</p>
            <table>
                <thead>
                    <th>#id</th>
                    <th>email</th>
                    <th>name</th>
                </thead>
                <tbody>
                    {usersList.map((user) => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}