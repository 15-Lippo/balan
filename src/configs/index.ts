import { appConfig } from './config-main';
import { contracts, assets } from './addresses';
async function init(){
    console.log("initializing");
    let response = await fetch('https://tokens.coingecko.com/uniswap/all.json');
    let tokenListJSON = await response.json();
    console.log("listing available tokens: ", tokenListJSON);
}
...

// Add init() call
init();

document.getElementById("login_button").onclick = connect;
document.getElementById("from_token_select").onclick = openModal;
document.getElementById("to_token_select").onclick = openModal;
document.getElementById("modal_close").onclick = closeModal;

async function init(){
    console.log("initializing");
    let response = await fetch('https://tokens.coingecko.com/uniswap/all.json');
    let tokenListJSON = await response.json();
    console.log("listing available tokens: ", tokenListJSON);
}
...

// Add init() call
init();

document.getElementById("login_button").onclick = connect;
document.getElementById("from_token_select").onclick = openModal;
document.getElementById("to_token_select").onclick = openModal;
document.getElementById("modal_close").onclick = closeModal;
export { appConfig, contracts, assets };

async function listAvailableTokens(){
  console.log("initializing");
  let response = await fetch('https://tokens.coingecko.com/uniswap/all.json');
  let tokenListJSON = await response.json();
  console.log("listing available tokens: ", tokenListJSON);
  tokens = tokenListJSON.tokens
  console.log("tokens:", tokens);

  // Create a token list for the modal
  let parent = document.getElementById("token_list");
  // Loop through all the tokens inside the token list JSON object
  for (const i in tokens){
    // Create a row for each token in the list
    let div = document.createElement("div");
    div.className = "token_row";
    // For each row, display the token image and symbol
    let html = `
    <img class="token_list_img" src="${tokens[i].logoURI}">
      <span class="token_list_text">${tokens[i].symbol}</span>
      `;
    div.innerHTML = html;
    parent.appendChild(div);
  }
}
 <div class="modal" id="token_modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Select a Token</h5>
            <button id="modal_close" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              < !-- Replace the modal text with token_list -->
            <div id="token_list"></div>
          </div>
        </div>
      </div>
    </div>
