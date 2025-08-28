import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react';

interface Account {
    email: string;
    password: string;
}

export default function LoginForm() {
    const [account, setAccount] = useState<Account>({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setAccount((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            console.log('Email:', account.email);
            console.log('Password:', account.password);
            setAccount({ email: '', password: '' });
        },
        [account]
    );

    return (
        <div
            style={{
                width: 300,
                margin: '80px auto',
                padding: 20,
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                background: '#fff',
                fontFamily: 'sans-serif',
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Login</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={account.email}
                    onChange={handleChange}
                    style={{
                        padding: 8,
                        borderRadius: 6,
                        border: '1px solid #ccc',
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={account.password}
                    onChange={handleChange}
                    style={{
                        padding: 8,
                        borderRadius: 6,
                        border: '1px solid #ccc',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: 10,
                        borderRadius: 6,
                        border: 'none',
                        background: '#4a90e2',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}