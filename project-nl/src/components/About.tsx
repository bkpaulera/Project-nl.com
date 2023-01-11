
import  profile  from "../assets/people/people-4.jpeg";

function About(){
    return(
        <section className="section bg-black">
            <div className="container mx-auto my-auto">
                <div className="flex flex-col xl:flex-row gap-10">
                    <img 
                        src={profile} 
                        alt='My Profile Pic' 
                        className="object-cover h-[400px] w-[400px] md:mx-auto lg:mx-0 rounded-2xl" />
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3x1 lg:text-4xl font-medium lg:font-extrabold mb-3
                                before:content-about relative
                                before:absolute before:opacity-40 
                                before:-top-2 before:hidden before:lg:block">
                                    Paulera 019
                            </h2>
                            <p className="mb-4 text-fuchsia-200">
                                Developer & Studant & Professor 
                            </p>
                            <hr className="mb-8 opacity-5"/>
                            <p className="mb-8">
                                Muito prazer meu nome é Paulo e eu vou devenvolvedor Front-end e Back-end . 
                                Para alem disso eu sou Professor do ensino médio , escrevo e de vez em quando 
                                produzo umas musicas alem de desenhar artes digiais.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;