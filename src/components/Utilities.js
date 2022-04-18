import GamesCard from "./utilities/GamesCard"
import Metaverse from "./utilities/Metaverse"

const Utilities = () => {
    return (
        <section className="section mask-c-blend-dark tc-light ov-h" id="utilities">
            <div className="container">
                <div className="section-head text-center wide-auto-sm tc-light">
                    <h2 className="title title-s4 animated text-yellow-500" data-animate="fadeInUp" data-delay=".1" title="Token Utilities">Token Utilities</h2>
                    <p className="animated" data-animate="fadeInUp" data-delay=".2">We will be developing the following to utilize the ROG TOKEN. 1 Metaverse Game, 5 3D Virtual Reality Game App, 5 Browser based 2D games.</p>
                </div>

                <div className="row flex-lg-nowrap align-items-center justify-content-center">
                    <div className="col-sm-12 mb-5 animated" data-animate="fadeInUp" data-delay=".1">
                        <Metaverse />
                    </div>
                </div>

                <div className="row flex-lg-nowrap align-items-center justify-content-center">
                    <div className="col-sm-12 mb-5 animated" data-animate="fadeInUp" data-delay=".2">
                        <div className="card bg-transparent ">
                            <div className="card-body">
                                <h5 className="card-title text-yellow-500">3D VIRTUAL REALITY GAMES</h5>

                                <div className="row flex-lg-nowrap align-items-center justify-content-center mt-5">
                                    <div className="col-md-4 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <GamesCard title="Beam Hit Game" text="In this game the player will have a beam sword and beam objects will come towards the player. Player has to hit the maximum objects to score in a limited amount of time. " />
                                    </div>
                                    <div className="col-md-4 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <GamesCard title="Table Tennis" text="In this game players can compete with other players through matchmaking. We will provide different rackets and table options to buy from. Moreover the progress will be determined through XPs and player levels." />
                                    </div>
                                    <div className="col-md-4 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <GamesCard title="Archery Game" text="In this game players can compete with other players to get more points in archery competitions. In this game we can provide multiple skins for arrows and Bows." />
                                    </div>
                                </div>

                                <div className="row flex-lg-nowrap align-items-center justify-content-center mt-5">
                                    <div className="col-md-4 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <GamesCard title="Job Simulator Game" text="In this game we can provide story based experience to users to do multiple tasks at home or office or anywhere else. It will include a daily life routine and tasks." />
                                    </div>

                                    <div className="col-md-4 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <GamesCard title="Horror Survival Game" text="In this game the player has to survive in some random building. It will be a quest based story game in which the player has to do some tasks successfully to survive in a haunted place. It can be multiplayer or single player. " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row flex-lg-nowrap align-items-center justify-content-center">
                    <div className="col-sm-12 mb-5 animated" data-animate="fadeInUp" data-delay=".2">
                        <div className="card bg-transparent rounded-lg ">
                            <div className="card-body">
                                <h5 className="card-title text-yellow-500">2D BROWSER BASED GAMES</h5>

                                <div className="row flex-lg-nowrap align-items-center justify-content-center mt-5">
                                    <div className="col-lg-6 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <div className="games-bg card shadow rounded-lg minHeight270">
                                            <div className="card-body">
                                                <div className="row flex-sm-nowrap align-items-center">
                                                    <div className="game mx-auto">
                                                        <div className="game-photo round-full">
                                                            <img src="images/team/sq-a.jpg" alt="game" className="round-full" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 p-2 pl-4 border-left border-warning ">
                                                        <h5 className="card-title text-yellow-500">Flying Monster </h5>
                                                        <p className="text-white text-sm">In this game we can provide different monsters and the user can select one of them and the user can control the monster by tapping on the screen and avoid different hurdles in the gameplay.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <div className="games-bg card shadow rounded-lg minHeight270">
                                            <div className="card-body">
                                                <div className="row flex-sm-nowrap align-items-center">
                                                    <div className="game mx-auto">
                                                        <div className="game-photo round-full">
                                                            <img src="images/team/sq-a.jpg" alt="game" className="round-full" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 p-2 pl-4 border-left border-warning ">
                                                        <h5 className="card-title text-yellow-500">2D Quest Game </h5>
                                                        <p className="text-white text-sm">In which Players have different quests to solve to improve their skills and level in the game.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row flex-lg-nowrap align-items-center justify-content-center mt-5">
                                    <div className="col-lg-6 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <div className="games-bg card shadow rounded-lg minHeight270">
                                            <div className="card-body">
                                                <div className="row flex-sm-nowrap align-items-center">
                                                    <div className="game mx-auto">
                                                        <div className="game-photo round-full">
                                                            <img src="images/team/sq-a.jpg" alt="game" className="round-full" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 p-2 pl-4 border-left border-warning ">
                                                        <h5 className="card-title text-yellow-500">Multiplayer Shooting Game </h5>
                                                        <p className="text-white text-sm">2D multiplayer shooting game in a fun environment and fun abilities. In this game users will join a room to play against each other and win with maximum points in a limited amount of time.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <div className="games-bg card shadow rounded-lg minHeight270">
                                            <div className="card-body">
                                                <div className="row flex-sm-nowrap align-items-center">
                                                    <div className="game mx-auto">
                                                        <div className="game-photo round-full">
                                                            <img src="images/team/sq-a.jpg" alt="game" className="round-full" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 p-2 pl-4 border-left border-warning ">
                                                        <h5 className="card-title text-yellow-500">Brain Game </h5>
                                                        <p className="text-white text-sm">Puzzle games with different difficulty levels. Making pictures, finding clues, answering questions etc</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row flex-lg-nowrap align-items-center justify-content-center mt-5">
                                    <div className="col-sm-12 mb-5 animated " data-animate="fadeInUp" data-delay=".2">
                                        <div className="games-bg card shadow rounded-lg">
                                            <div className="card-body">
                                                <div className="row flex-sm-nowrap align-items-center">
                                                    <div className="game mx-auto">
                                                        <div className="game-photo round-full">
                                                            <img src="images/team/sq-a.jpg" alt="game" className="round-full" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 p-2 pl-4 border-left border-warning ">
                                                        <h5 className="card-title text-yellow-500">Match 3 Game </h5>
                                                        <p className="text-white text-sm">In which we can provide a Jungle forest theme and users can match different objects and blast them and earn more points. It’s just like an addictive and fun game for all age categories.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row flex-lg-nowrap align-items-center justify-content-center">
                    <div className="col-sm-12 mb-5 animated" data-animate="fadeInUp" data-delay=".1">
                        <div className="card games-bg shadow ">
                            <div className="card-body">
                                <h5 className="card-title text-yellow-500">ANTI-RUG SYSTEM</h5>
                                <p className="text-white">All tokens especially allocations for developmental team has vesting time, locked in pinksale.finance.  So there are no unlocked tokens for rugpull. All ROG holders are safe.</p>
                                <br />
                                <h5 className="card-title text-yellow-500">TAXES & LIMITS</h5>
                                <ul className="list-unstyled">
                                    <li>LIMIT PER TRANSACTION: 0.5% of Total Supply</li>
                                    <li>TRANSACTION TAX 12%
                                        <ul className="nestedlist">
                                            <li>4% Burn</li>
                                            <li>2% All token holders in BNB</li>
                                            <li>3% Liquidity to Pancakeswap</li>
                                            <li>3% Marketing</li>
                                        </ul>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Utilities