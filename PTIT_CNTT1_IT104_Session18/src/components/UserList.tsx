import { useMemo } from 'react';

interface User {
    id: number;
    name: string;
    age: number;
}

const users: User[] = [
    { id: 1, name: 'Alice', age: 17 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 18 },
    { id: 5, name: 'Furina', age: 26 },
];

export default function UserList() {
    const adult = useMemo(() => {
        return users.filter((tmp) => tmp.age >= 18);
    }, []);

    return (
        <div
            style={{
                margin: '20px auto',
                width: 300,
                borderRadius: 14,
                background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
                padding: 16,
                color: 'white',
                fontFamily: 'sans-serif',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
        >
            <h3 style={{ textAlign: 'center', marginBottom: 12 }}>Danh sách người lớn</h3>
            {adult.map((user, idx: number) => (
                <div
                    key={user.id}
                    style={{
                        padding: '6px 0',
                        borderBottom: idx < adult.length - 1 ? '1px solid rgba(255,255,255,0.3)' : 'none',
                    }}
                >
                    {idx + 1}. {user.name} ({user.age} tuổi)
                </div>
            ))}
        </div>
    );
}