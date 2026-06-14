import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "自己紹介 | 50代ITエンジニアのAI実践記",
  description: "50代ITエンジニアKの自己紹介",
};

const AboutPage = () => {
  return (
    <div>
      <h1>自己紹介</h1>
      <p>はじめまして、50代ITエンジニアK（以下、K）と申します。</p>

      <h2>経歴</h2>
      <ul>
        <li>ITエンジニア歴20年以上</li>
        <li>大手IT企業でのシステム開発・設計を経験</li>
        <li>複数の企業立ち上げ・経営に携わる</li>
        <li>現在は中小企業・個人起業家向けのAI導入・活用支援に取り組んでいる</li>
      </ul>

      <h2>このブログについて</h2>
      <p>
        AIを仕事や経営に活かすための実践記録を発信しています。小難しい技術の話ではなく、「これ、明日から使えそう」と思ってもらえるような内容を目指しています。
      </p>
      <p>
        特に、AIに興味はあるけれど何から始めればいいかわからない、という50代以上の経営者・起業家の方に読んでいただけると嬉しいです。
      </p>
    </div>
  );
};

export default AboutPage;
