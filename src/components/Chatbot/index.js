import React from 'react';
import './styles.scss';


function Chatbot(){

    return(
        <section>
        <div className="chat_icon">
            <i className="fas fa-comments" aria-hidden="true"></i>  
        </div>

        <div className="chat_box">
            <div class="conv-form-wrapper">
                <form action="" method="GET" className="hidden">
                    <div>
                        <select name="category" data-conv-question="Helo! how can i help you.">
                        <option value="purchasing">Purchasing ?</option>
                        <option value="customerHelp">customer help ?</option>
                        </select>
                        <div data-conv-fork="category">
                        <div data-conv-case="purchasing">
                            <input type="text" name="help_you" data-conv-question="Please, tell me How can i help you" />
                        </div>
                        <div data-conv-case="customerHelp">
                            <input type="text" name="contact_No" data-conv-question="Please, tell me your contact No" />
                        </div>
                        </div>
                    </div>
                    <input type="text" name="name" data-conv-question="Please, tell me your name" />
                    <input data-conv-question="Type in your e-mail" data-pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" id="email" type="email" name="email" required placeholder="What's your e-mail?"></input>
                        <select data-conv-question="Conform ?">
                            <option value="Conform">Conform</option>
                            
                        </select>
                </form>
            </div>
        </div>
        </section>

    );

}

export default Chatbot;