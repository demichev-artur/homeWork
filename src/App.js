import './App.css';
import Raiting from "./components/Raiting";
import Tags from "./components/Tags";

function App() {

    let tagsOne = [
        {title: 'Тег №1', href: 'http://link1.ru'},
        {title: 'Тег №2', href: 'http://link2.ru'},
        {title: 'Тег №3', href: 'http://link3.ru'},
    ]

    let tagsTwo = [
        {title: 'Какая-то ссылка №1', href: 'http://link1.ru'},
        {title: 'Какая-то ссылка №2', href: 'http://link2.ru'},
        {title: 'Какая-то ссылка №3', href: 'http://link3.ru'},
        {title: 'Какая-то ссылка №4', href: 'http://link4.ru'},
        {title: 'Какая-то ссылка №5', href: 'http://link5.ru'},
        {title: 'Возможно какая-то ссылка №6', href: 'http://link6.ru'}
    ]

    let tagsTree = [
        {title: 'Travels', href: 'http://link1.ru'},
        {title: 'Sports', href: 'http://link2.ru'},
        {title: 'Music', href: 'http://link3.ru'},
        {title: 'Political', href: 'http://link4.ru'}
    ]

    return (

        <div className="content">
            <Raiting starCount={5} starRaiting={2}/>
            <Raiting starCount={4} starRaiting={3}/>
            <Raiting starCount={10} starRaiting={8}/>
            <Raiting starCount={20} starRaiting={8}/>
            <Tags tags={tagsOne}/>
            <Tags tags={tagsTwo}/>
            <Tags tags={tagsTree}/>
        </div>

    );
}

export default App;
