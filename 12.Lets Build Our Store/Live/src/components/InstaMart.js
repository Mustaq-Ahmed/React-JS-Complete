import { useEffect, useState } from "react";

const Section = ({ title, description, isVisible, onShow, onHide }) => {

    return (
        <div className="border border-black m-2 p-2">
            <h1 className="text-xl font-bold">{title}</h1>
            {
                isVisible ? (
                    <button onClick={onHide} className="cursor-pointer underline">
                        Hide
                    </button>
                ) : (
                    <button onClick={onShow} className="cursor-pointer underline">
                        Show
                    </button>
                )
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const InstaMart = () => {
    const [sectionVisible, setSectionVisible] = useState("about")
    return (
        <>
            <h1 className="text-3xl font-bold m-2 p-2">InstaMart</h1>
            <Section title={"About"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quasi facere. Labore quaerat ab quo quos tempore. Vitae provident nostrum delectus harum aperiam qui voluptas recusandae voluptate nisi, atque labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto recusandae commodi odio fugiat ipsa similique, inventore explicabo, nulla magni voluptatem distinctio quos esse neque accusantium ab eos qui perferendis voluptatum."}
                isVisible={sectionVisible == "about"}
                onShow={() => setSectionVisible("about")}
                onHide={() => setSectionVisible(false)}
            />
            <Section title={"Team"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum voluptates autem perferendis quisquam dolorem deserunt. Similique minima deserunt dolorum dignissimos voluptatibus id dolore nobis quasi, ea perferendis! Recusandae, possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem, architecto eveniet necessitatibus sed debitis maxime, impedit quia repellat magnam saepe. Suscipit, minus nostrum! Hic laborum voluptatem ut error totam?"}
                isVisible={sectionVisible == "team"}
                onShow={() => setSectionVisible("team")}
                onHide={() => setSectionVisible(false)}
            />
            <Section title={"Careers"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quasi facere. Labore quaerat ab quo quos tempore. Vitae provident nostrum delectus harum aperiam qui voluptas recusandae voluptate nisi, atque labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto recusandae commodi odio fugiat ipsa similique, inventore explicabo, nulla magni voluptatem distinctio quos esse neque accusantium ab eos qui perferendis voluptatum."}
                isVisible={sectionVisible == "career"}
                onShow={() => setSectionVisible("career")}
                onHide={() => setSectionVisible(false)}
            />
        </>
    )
}

export default InstaMart;