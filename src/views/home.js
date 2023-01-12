import React from 'react'

import { Helmet } from 'react-helmet'

import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Manabi by Weblytics</title>
        <meta
          name="description"
          content="Manabi makes learning easy and fun. With our wide range of online courses, you can be more efficient at work and learn new skills that will make your life more enjoyable."
        />
        <meta property="og:title" content="Manabi by Weblytics" />
        <meta
          property="og:description"
          content="Manabi makes learning easy and fun. With our wide range of online courses, you can be more efficient at work and learn new skills that will make your life more enjoyable."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2359627e-30f0-445a-b64d-573076efa250/b1823fec-2b7d-4465-b66a-b1577e4848dd?org_if_sml=1"
        />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">
          <div className="home-navbar1">
            <div className="home-middle">
              <img
                alt="image"
                src="/playground_assets/manabi-200h.png"
                className="home-image"
              />
            </div>
          </div>
        </header>
      </div>
      <div className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero1">
              <div className="home-container01">
                <h1 className="home-text">
                  <span>新しいこと、</span>
                  <span>始めよう。</span>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="home-categories section-container column">
          <div className="home-banner">
            <div className="home-container02">
              <h3 className="home-text04">どこでも</h3>
            </div>
          </div>
          <div className="home-container03 max-width-container">
            <div className="home-container04">
              <span className="home-text05">
                Manabiは一つのサイトで様々な分野の講座を受講できるオンラインの学びコミュニティです。日本はもちろん、世界中から参加していただくことができます。また、世界中の参加者が集って意見や情報を交換できる場も提供します。
              </span>
            </div>
          </div>
        </div>
        <div className="home-categories1 section-container column">
          <div className="home-banner1">
            <div className="home-container05">
              <h3 className="home-text06">
                <span>だれでも</span>
                <br></br>
              </h3>
            </div>
          </div>
          <div className="home-container06 max-width-container">
            <div className="home-container07">
              <span className="home-text09">
                老若男女どなたでも、職業や年齢に関係なくどなたでも参加していただくことができます。必要なのはインターネットにつながったパソコンやタブレットとやる気のみ！学びたい何かがきっと見つかるはずです。
              </span>
            </div>
          </div>
        </div>
        <div className="home-categories2 section-container column">
          <div className="home-banner2">
            <div className="home-container08">
              <h3 className="home-text10">素敵な一歩を</h3>
            </div>
          </div>
          <div className="home-container09 max-width-container">
            <div className="home-container10">
              <span className="home-text11">
                これまでに、「始めたいけれど、どこから始めればいいか分からない」「最初の一歩が踏み出せない」といった経験はありませんか。Manabiはそんな方の「素敵な一歩」を踏み出すためのお手伝いをしています。この機会に新しいこと、始めてみませんか？
              </span>
            </div>
          </div>
        </div>
        <div className="home-trending-items section-container">
          <div id="courses" className="home-max-width1 max-width-container">
            <SectionHeading
              heading="コース紹介"
              subtitle="現在、以下のコースを受講していただくことができます。今後、他の分野のコースも続々追加予定です！"
              rootClassName="section-heading-root-class-name1"
            ></SectionHeading>
            <div className="home-cards-container">
              <a
                href="https://store.manabi.town/l/email-in-english"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <CategoryCard
                  image_alt="スキマ時間を充実させる、楽しい英文メール。小学生以上対象。"
                  category_img="/playground_assets/thumbnail%204-1500w.png"
                  rootClassName="category-card-root-class-name"
                  className="home-component1"
                ></CategoryCard>
              </a>
              <a
                href="https://store.manabi.town/l/fun-english-learning"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <CategoryCard
                  name="What is Airtable? (coming soon)"
                  image_alt="英語が好きになる、楽しく英語を学ぼう。小学校高学年・中学生対象。"
                  category_img="/playground_assets/thumbnail%203-1500w.png"
                  rootClassName="category-card-root-class-name1"
                  className="home-component2"
                ></CategoryCard>
              </a>
              <a
                href="https://store.manabi.town/l/thursday-night-english"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <CategoryCard
                  name="Using Canva to Create Beautiful Promotional Materials (coming soon)"
                  image_alt="忙しいあなたのための、木曜23時の英会話。高校生以上。"
                  category_img="/playground_assets/thumbnail%202-1500w.png"
                  rootClassName="category-card-root-class-name2"
                  className="home-component3"
                ></CategoryCard>
              </a>
              <a
                href="https://store.manabi.town/l/intro-to-ai-art"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <CategoryCard
                  name="Using Canva to Create Beautiful Promotional Materials (coming soon)"
                  image_alt="絵が描けなくても大丈夫、はじめてのAIアート。13歳以上対象。"
                  category_img="/playground_assets/thumbnail%201-1500w.png"
                  rootClassName="category-card-root-class-name3"
                  className="home-component4"
                ></CategoryCard>
              </a>
            </div>
          </div>
        </div>
        <div className="home-full-width-banner section-container">
          <div className="home-container11">
            <img
              alt="A woman in mustard color sweater working on her laptop."
              src="/playground_assets/letter-400w.png"
              loading="lazy"
              className="home-image1"
            />
          </div>
          <div className="home-left">
            <div className="home-content">
              <h2 className="home-text12 Heading-2-JP">ニュースレター</h2>
              <span className="home-text13">
                <span>新コース追加のお知らせなどを</span>
                <br></br>
                <span>メールにてお届けします！</span>
              </span>
            </div>
            <a
              href="https://course.weblytics.digital/newsletter"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <div className="home-btn button">
                <span className="home-text17">購読する</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="max-width-container">
          <footer className="home-footer1">
            <div className="home-container12">
              <img
                alt="image"
                src="/playground_assets/manabi-200h.png"
                className="home-image2"
              />
              <span className="home-text18">2023. All rights reserved.</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home
