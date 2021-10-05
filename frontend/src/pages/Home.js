import logo from "../logo.svg";
import '../css/Home.css';

function TableData(props) {
    const src = "image/table/image_part_0" + props.index + ".jpg"

    return <td>
        <img src={src}
             alt={props.index}/>
    </td>
}

function Home() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <center>
                <h1>Pyatnashki dlya Natashki</h1>
                <table className="Teens" border={1} cellPadding={0} cellSpacing={0}>
                    <tr>
                        <TableData index="01"/>
                        <TableData index="02"/>
                        <TableData index="03"/>
                        <TableData index="04"/>
                    </tr>
                    <tr>
                        <TableData index="05"/>
                        <TableData index="06"/>
                        <TableData index="07"/>
                        <TableData index="08"/>
                    </tr>
                    <tr>
                        <TableData index="09"/>
                        <TableData index="10"/>
                        <TableData index="11"/>
                        <TableData index="12"/>
                    </tr>
                    <tr>
                        <TableData index="13"/>
                        <TableData index="14"/>
                        <TableData index="15"/>
                        <TableData index="16"/>
                    </tr>
                </table>
            </center>
        </header>
    );
}

export default Home;
