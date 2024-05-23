import { useState, useEffect } from "react";

export const Modal = ({ visible, onClose, selectPack }) => {


    const [formData, setFormData] = useState({
        pack: selectPack,
        name: '',
        phone: '',
        email: '',
        district: ''
    });


    useEffect(() => {
        setFormData(prevData => ({ ...prevData, pack: selectPack }));
    }, [selectPack]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            records: [
                {
                    fields: {
                        Noms: formData.name,
                        Telephone: formData.phone,
                        Email: formData.email,
                        Quartier: formData.district,
                        Pack: formData.pack
                    }
                }
            ]
        };

        try {
            const response = await fetch('https://api.airtable.com/v0/appZVSj1SR2iniQ1P/Pressing', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer patnO0fWdsN41EfB2.41bd957c93a307e0c131f4ecd236f996c757dc67a4c69158392767f32b062cad',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Souscription terminé, nous vous contactons bientot.');
                setFormData({ pack: '', name: '', phone: '', email: '', district: '' });
                onClose();
            } else {
                alert("Une erreur s'est produite.");
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999
        },
        modal: {
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '15px',
            position: 'relative',
            minWidth: '200px',
            minHeight: '200px',
            width: "700px",
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        closeButton: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        label: {
            marginBottom: '5px',
            fontSize: '14px',
            color: '#333',
        },
        input: {
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '14px',
            width: '100%',
            boxSizing: 'border-box',
        },
        buttonGroup: {
            display: 'flex',
            justifyContent: 'center',
        },
        submitButton: {
            backgroundColor: '#ff4d4f',
            color: '#fff',
            border: 'none',
            padding: '10px 50px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: "5px"
        },
        cancelButton: {
            backgroundColor: 'grey',
            color: '#fff',
            border: 'none',
            padding: '10px 50px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: "5px"
        }
    };


    if (!visible) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>Souscription</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>Choisissez un pack:</label>
                    <select
                        name="pack"
                        value={formData.pack}
                        onChange={handleChange}
                        style={styles.input}
                    >
                        <option value="Classique">Mom's Classique</option>
                        <option value="Premium">Mom's Premium</option>
                        <option value="Gold">Mom's Gold</option>
                    </select>

                    <label style={styles.label}>Votre Nom</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />

                    <label style={styles.label}>Numero Téléphone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />

                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />

                    <label style={styles.label}>Quartier:</label>
                    <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />

                    <div style={styles.buttonGroup}>
                        <button type="submit" style={styles.submitButton}>Valider</button>
                        <button type="button" onClick={onClose} style={styles.cancelButton}>Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    );
};