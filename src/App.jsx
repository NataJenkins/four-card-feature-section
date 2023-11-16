import "./App.scss";
import CardComponent from "./components/CardComponent";
function App() {
    const red = "hsl(0, 78%, 62%)";
    const cyan = "hsl(180, 62%, 55%)";
    const orange = "hsl(34, 97%, 64%)";
    const blue = "hsl(212, 86%, 64%)";
    const cardsContent = [
        {
            title: "Supervisor",
            description: "Monitors activity to identify project roadblocks",
            color: cyan,
        },
        {
            title: "Team Builder",
            description:
                "Scans our talent network to create the optimal team for your project",
            color: red,
        },
        {
            title: "Karma",
            description: "Regularly evaluates our talent to ensure quality",
            color: orange,
        },
        {
            title: "Calculator",
            description:
                "Uses data from past projects to provide better delivery estimates",
            color: blue,
        },
    ];

    return (
        <main>
            <div className="container">
                <div className="container-content">
                    <div className="header">
                        <h1 className="title">
                            Reliable, efficient delivery <br />
                            <span>Powered by Technology</span>
                        </h1>
                        <p className="sub-title">
                            Our Artificial Intelligence powered tools use
                            millions of project data points to ensure that your
                            project is successful
                        </p>
                    </div>
                    <div className="cards-container">
                        {cardsContent.map((card) => (
                            <CardComponent
                                title={card.title}
                                description={card.description}
                                color={card.color}
                                key={card.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
