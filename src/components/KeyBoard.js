import React from 'react'
import '../style/keyboard.css'
import { HashLink as Link } from "react-router-hash-link";
function KeyBoard() {
    return (
        <div className="body">

        <div className="key_box">
         <div className="text-box">
         <h1>Mint Your Api</h1>
          <p>Lorem ipsum dolor sit amet,Voluptatum ducimus voluptates voluptas?</p>
          <p>Lorem ipsum dolor sit amet</p>
         </div>
        </div>

  <ul class="keys">
    <li id="grey">💀</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>7</li>
    <li>8</li>
    <li>0</li>
    <li>_</li>
    <li id="twitter" className="key_icon">
    <div>
    <a className="one" onClick={()=> window.open("", "_blank")}>
                <p>Twitter</p>
            </a>
    </div>
    <div className="twet_bottom">
      =
    </div>
    </li>
    <li id="yellow" className="discord">
    <div>
    <a className="one" onClick={()=> window.open("", "_blank")}>
                <p>Discord</p>
                   </a>
    </div>
    <div className="discord_bottom">
    🎨
    </div>
    </li>
  </ul>
  <ul class="keys">
    <li id="red">
    <Link className="smooth-links" smooth to="#attribute">
    Attributes
    </Link>
    </li>
    <li id="Q">Q</li>
    <li id="W">W</li>
    <li id="E">E</li>
    <li id="R">R</li>
    <li id="T">T</li>
    <li id="Y">Y</li>
    <li id="U">U</li>
    <li id="I">I</li>
    <li id="O">O</li>
    <li id="P">P</li>
    <li>[</li>
    <li>]</li>
    <li>\</li>
  </ul>
  <ul class="keys">
    <li id="blue"><Link className="smooth-links" smooth to="#collection">Collection🧢</Link></li>
    <li>A</li>
    <li>S</li>
    <li>D</li>
    <li>F</li>
    <li>G</li>
    <li>H</li>
    <li>J</li>
    <li>K</li>
    <li>L</li>
    <li>;</li>
    <li>""</li>
    <li id="green">🔫</li>
  </ul>
  <ul class="keys">
    <li id="rebeca">

    <div className="wallet_btn">
    Connect Wallet
    </div>
    <div className="wallet_bottom">
    🔥
    </div>
    </li>
    <li>Z</li>
    <li>X</li>
    <li>C</li>
    <li>V</li>
    <li>B</li>
    <li>N</li>
    <li>M</li>
    <li>,</li>
    <li>.</li>
    <li>?</li>
    <li id="up">🧬</li>
  </ul>
   <ul class="keys">
    <li id="one">ctrl</li>
    <li id="one">alt</li>
    <li id="one">cmd</li>
    <li id="two">APE IN</li>
    <li id="one">cmd</li>
    <li id="one">alt</li>
  </ul>

  <div className="mobile_button">
    <button>  <Link className="smooth-links" smooth to="#attribute">
    MIIN API
    </Link></button>
  </div>
</div>
    )
}

export default KeyBoard
