import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (

  <Layout>

    <SEO title="Anasayfa" />
    <header className="hero">
      <div className="content">
        <h1>Kişisel Bakım için İpuçları</h1>
        <p>Pürüzsüz ve Işıltılı Bir Görünüş İçin Tavsiyeler</p>
        <Link to="/" className="btn btn-secondary"><i className="fas fa-chevron-right"></i> Daha fazlası</Link>
      </div>
    </header>

    <main>
      <section className="hakkimda flex-columns bg-primary " id="hakkimda">
        <div className="row">
          <div className="column">
            <div className="column-2">

              <h2>Hakkımda</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem accusantium enim blanditiis omnis natus
              ea
              cum amet vel, ad dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, similique</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, expedita. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et cumque non ab voluptatem dolor beatae nam nobis dignissimos rem ut.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium pariatur necessitatibus
              suscipit eos veniam maxime. Tempore soluta illo omnis? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Suscipit, est?</p>
              <p>  <Link className="etiket" to="/#footer">Sosyal Medya Bağlantılarım</Link></p>
            </div>

          </div>

          <div className="column colum-img">
            <div className="column-3 tc">
              <Image />
              <h4>Sultan Şakrak</h4>
              <p>Vice President</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-columns" id="contact">
        <div className="row">
          <div className="column">
            <div className="column-1">

            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-light">
              <h2>İletişim Formu</h2>



              <form method="post" netlify-honeypot="bot-field" data-netlify="true" className="callback-form">
                <input type="hidden" name="bot-field" />
                <div className="form-control">
                  <label htmlFor="name"></label>
                  <input type="text" name="name" id="name" placeholder="İsminiz" />
                </div>
                <div className="form-control">
                  <label htmlFor="email"></label>
                  <input type="email" name="email" id="email" placeholder="email giriniz" />
                </div>
                <div className="form-control">
                  <label htmlFor="konu"></label>
                  <textarea name="konu" id="konu" placeholder="Soru, Fikir, İstekler için"></textarea>
                </div>
                <input type="submit" value="Gönder" id="submit" className="btn btn-secondary" />
              </form>


            </div>
          </div>
        </div>
      </section>

    </main>

  </Layout>

)

export default IndexPage
