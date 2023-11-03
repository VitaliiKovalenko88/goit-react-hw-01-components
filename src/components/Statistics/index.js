

const Statistics = ({title, stats} ) =>{
  
return (
<section class="statistics">
{title?<h2 class="title">{title}</h2>:null}

<ul class="stat-list">
  {stats.map(stat=>(
    <li class="item" key={stat.id}>
    <span class="label"></span>
    <span class="percentage"></span>
  </li>
  ) )}
</ul>
</section>)
};


export default Statistics;