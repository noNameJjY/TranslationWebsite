import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Services.css';

const MarriageGreenCardInterview: React.FC = () => (
  <div className="article-detail-page">
    <Header />
    <main>
      <h1>记录工作：婚绿面谈</h1>
      <p>给大家提供1个婚绿数据点</p>
      <p>客人对我真的非常好，还特地给我带了咖啡和小点心☕️，超级感动</p>
      <p>等待了大概1小时<br />面谈时长50分钟左右，夫妻分开面谈<br />面谈官比较严格，不苟言笑</p>
      <h2>面谈官大概问了以下问题：</h2>
      <ul>
        <li>自己和伴侣名字，生日</li>
        <li>两个人怎么认识的？在哪里，当场还有谁，具体日期</li>
        <li>之后发生了什么？怎么继续联系的？</li>
        <li>怎么求婚的？谁向谁求婚？地点+时间+当场还有谁</li>
        <li>描述领证当天，包括地点+时间+当场还有谁</li>
        <li>婚礼当天发生了什么，同样的三要素 地点+时间+当场还有谁</li>
        <li>其他旅行细节</li>
        <li>很幸运地，这次没有问到任何有关bh 的问题</li>
      </ul>
      <p>总得来说，面谈很顺利，期待好消息！</p>
    </main>
    <Footer />
  </div>
);

export default MarriageGreenCardInterview;
