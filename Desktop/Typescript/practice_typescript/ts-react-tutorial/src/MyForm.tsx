// 인풋 상태 관리하기
import React , {useState} from 'react';

type MyFormProps = {
    onSubmit : (form : {name : string; description : string}) => void;
};

function MyForm({ onSubmit } :  MyFormProps){
    const [form, setForm] = useState({
        name: '',
        description : ''
    });

    const {name, description} = form;

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        // e 값을 무엇으로 설정해야 하나?
        // 일단 모를때는 any로 설정
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        });
    };

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        // 모르니까 any
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        }); // 초기화
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;