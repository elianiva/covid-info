import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../build/About.css"

function About() {
  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <Navbar url="tentang" />
        <div className="about">
          <h1 className="about__heading">Tentang website ini</h1>
          <hr />
          <div className="about__container">
            <h2 className="about__subheading">Teknologi yang digunakan:</h2>
            <ul>
              <li className="about__stack">React JS</li>
              <p>
                React JS merupakan sebuah library Javascript front end yang
                digunakan untuk membuat sebuah user interface dengan konsep
                komponen dan langung berubah ketika terdapat perubahan data.
              </p>
              <li className="about__stack">Chart JS</li>
              <p>
                Chart JS adalah sebuah library Javascript yang digunakan untuk
                memvisualisasikan kumpulan data dengan media grafik. Website ini
                menggunakan Line chart dan Bar chart.
              </p>
              <li className="about__stack">PostCSS</li>
              <p>
                PostCSS adalah sebuah library CSS yang dapat memproses CSS
                dengan plugin Javascript. Contohnya seperti Autoprefixer yang
                digunakan untuk merubah CSS menjadi CSS dengan prefix agar
                support di semua browser. Website ini menggunakan plugin
                autoprefixer untuk memberi prefix, cssnano untuk minify CSS, dan
                postcss-nested untuk menulis CSS layaknya SASS.
              </p>
            </ul>
            <h2 className="about__subheading">API yang digunakan:</h2>
            <ul>
              <li className="about__stack">NOVEL Covid API</li>
              <p>
                NovelCOVID merupakan sebuah API gratis yg dapat menyediakan data
                tentang COVID 19 bedasarkan negara, kronologi waktu, dan banyak
                lainnya. Dokumentasinya bisa kamu baca{" "}
                <a href="https://corona.lmao.ninja/docs">disini</a>
              </p>
              <li className="about__stack">Coollabs Covid API</li>
              <p>
                Coollabs Covid API merupakan sebuah alternatif dari KawalCorona
                yg dapat menyediakan data tentang COVID 19 di Indonesia. Daftar
                endpointnya ada di
                <a href="https://corona.lmao.ninja/docs">disini</a>
              </p>
              <li
                style={{
                  textDecoration: "line-through",
                  fontStyle: "italic",
                  color: "#b0b0b0"
                }}
                className="about__stack"
              >
                Kawal Corona API
              </li>
              <p
                style={{
                  textDecoration: "line-through",
                  fontStyle: "italic",
                  color: "#b0b0b0"
                }}
              >
                KawalCorona merupakan penyedia API gratis dari Indonesia yang
                dapat menyediakan data COVID 19 berdasarkan negara, provinsi,
                dan lainnya. Dokumentasinya bisa kamu baca{" "}
                <a href="https://kawalcorona.com/api/">disini</a>
              </p>
              <small style={{ color: "#f07178", fontWeight: "bold" }}>
                dikarenakan adanya CORS, web ini tidak lagi menggunakan API dari
                kawalcorona
              </small>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
