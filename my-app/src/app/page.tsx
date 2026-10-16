"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Dropdown } from "react-bootstrap";

// Components preserve the structure and Bootstrap classes of the original mockup.
function LeftSidebar() {
  return (
<aside className="col-auto left-rail">
<div className="brand-box text-center">
<a className="brand-link" href="#"><img src="/craigslist-logo.png" alt="craigslist" className="craigslist-logo" /></a>
</div>
<div className="post-box text-center">
<a href="#" className="post-link"><img src="/post-ad-icon.png" alt="" className="post-ad-icon" />post an ad</a>
</div>
<div className="px-2 mt-3">
<div className="input-group input-group-sm search-box">
<span className="input-group-text"><img src="/search-icon.png" alt="" className="search-icon" /></span>
<input className="form-control" type="text" placeholder="search craigslist" aria-label="search craigslist" />
</div>
</div>
<div className="calendar-wrap text-center">
<a href="#" className="fw-bold small">event calendar</a>
<table className="table table-bordered table-sm calendar-table mx-auto mb-0 mt-2">
<thead>
<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr>
</thead>
<tbody>
<tr><td>4</td><td>5</td><td className="today">6</td><td><a href="#">7</a></td><td><a href="#">8</a></td><td><a href="#">9</a></td><td><a href="#">10</a></td></tr>
<tr><td><a href="#">11</a></td><td><a href="#">12</a></td><td><a href="#">13</a></td><td><a href="#">14</a></td><td><a href="#">15</a></td><td><a href="#">16</a></td><td><a href="#">17</a></td></tr>
<tr><td><a href="#">18</a></td><td><a href="#">19</a></td><td><a href="#">20</a></td><td><a href="#">21</a></td><td><a href="#">22</a></td><td><a href="#">23</a></td><td><a href="#">24</a></td></tr>
<tr><td><a href="#">25</a></td><td><a href="#">26</a></td><td><a href="#">27</a></td><td><a href="#">28</a></td><td><a href="#">29</a></td><td><a href="#">30</a></td><td><a href="#">31</a></td></tr>
<tr><td><a href="#">1</a></td><td><a href="#">2</a></td><td><a href="#">3</a></td><td><a href="#">4</a></td><td><a href="#">5</a></td><td><a href="#">6</a></td><td><a href="#">7</a></td></tr>
</tbody>
</table>
</div>
<div className="rail-links top-links text-center">
<a href="#">help, faq, abuse, legal</a>
<a href="#">avoid scams &amp; fraud</a>
<a href="#">personal safety tips</a>
</div>
<div className="rail-links middle-links text-center">
<a href="#">about craigslist</a>
<a href="#">best-of-craigslist</a>
<a href="#">craigslist is hiring</a>
<a href="#">what's new</a>
<a href="#">system status</a>
</div>
<div className="charity text-center">
<a href="#">craigslist charitable</a>
<div className="charity-icons"><img src="/charity-icons.png" alt="charity icons" /></div>
</div>
<div className="rail-links bottom-links text-center">
<a href="#">craig newmark<br />philanthropies</a>
</div>
</aside>
  );
}

function LocationNavigation() {
  return (
<div className="location-bar d-flex align-items-center justify-content-between">
<div className="d-flex align-items-center flex-wrap location-left">
<Dropdown><Dropdown.Toggle variant="link" className="location-title p-0 border-0"><img src="/location-icon.png" alt="" className="location-icon" /> hawaii</Dropdown.Toggle><Dropdown.Menu><Dropdown.Item href="#">oahu</Dropdown.Item><Dropdown.Item href="#">big island</Dropdown.Item><Dropdown.Item href="#">maui</Dropdown.Item></Dropdown.Menu></Dropdown>
<div className="island-tabs ms-3">
<a href="#">oah</a><a href="#">big</a><a href="#">mau</a><a href="#">kau</a><a href="#">mol</a>
</div>
</div>
<div className="quick-actions d-flex align-items-center">
<a href="#"><img src="/faves-icon.png" alt="" /><small>faves</small></a>
<a href="#"><img src="/top-post-icon.png" alt="" /><small>post</small></a>
<a href="#"><img src="/acct-icon.png" alt="" /><small>acct</small></a>
</div>
</div>
  );
}

function CategorySections() {
  return (
<div className="row g-3 categories-row">
<div className="col-md-4">
<section className="category-section">
<h2><img src="/community-icon.png" alt="" /> <a href="#">community</a></h2>
<div className="two-col-links">
<div>
<a href="#">activities</a><a href="#">artists</a><a href="#">childcare</a><a href="#">classes</a><a href="#">events</a><a href="#">general</a><a href="#">groups</a><a href="#">local news</a>
</div>
<div>
<a href="#">lost + found</a><a href="#">missed connections</a><a href="#">musicians</a><a href="#">pets</a><a href="#">politics</a><a href="#">rants &amp; raves</a><a href="#">rideshare</a><a href="#">volunteers</a>
</div>
</div>
</section>
<section className="category-section mt-3">
<h2><img src="/services-icon.png" alt="" /> <a href="#">services</a></h2>
<div className="two-col-links">
<div>
<a href="#">automotive</a><a href="#">beauty</a><a href="#">cell / mobile</a><a href="#">computer</a><a href="#">creative</a><a href="#">cycle</a><a href="#">event</a><a href="#">farm + garden</a><a href="#">financial</a><a href="#">health / well</a><a href="#">household</a>
</div>
<div>
<a href="#">labor / move</a><a href="#">legal</a><a href="#">lessons</a><a href="#">marine</a><a href="#">pet</a><a href="#">real estate</a><a href="#">skilled trade</a><a href="#">sm biz ads</a><a href="#">travel / vac</a><a href="#">write / ed / tran</a>
</div>
</div>
</section>
<section className="category-section mt-3">
<h2><img src="/forums-icon.png" alt="" /> <a href="#">discussion forums</a></h2>
<div className="three-col-links">
<div><a href="#">apple</a><a href="#">arts</a><a href="#">atheist</a><a href="#">autos</a><a href="#">beauty</a><a href="#">bikes</a><a href="#">celebs</a><a href="#">comp</a><a href="#">cosmos</a><a href="#">diet</a><a href="#">divorce</a><a href="#">dying</a><a href="#">eco</a><a href="#">feedbk</a><a href="#">film</a><a href="#">fixit</a><a href="#">food</a></div>
<div><a href="#">frugal</a><a href="#">gaming</a><a href="#">garden</a><a href="#">haiku</a><a href="#">help</a><a href="#">history</a><a href="#">housing</a><a href="#">jobs</a><a href="#">jokes</a><a href="#">legal</a><a href="#">manners</a><a href="#">marriage</a><a href="#">money</a><a href="#">music</a><a href="#">open</a><a href="#">parent</a><a href="#">pets</a></div>
<div><a href="#">philos</a><a href="#">photo</a><a href="#">politics</a><a href="#">psych</a><a href="#">recover</a><a href="#">religion</a><a href="#">rofo</a><a href="#">science</a><a href="#">spirit</a><a href="#">sports</a><a href="#">super</a><a href="#">tax</a><a href="#">travel</a><a href="#">tv</a><a href="#">vegan</a><a href="#">words</a><a href="#">writing</a></div>
</div>
</section>
</div>
<div className="col-md-4">
<section className="category-section">
<h2><img src="/housing-icon.png" alt="" /> <a href="#">housing</a></h2>
<div className="one-col-links">
<a href="#">apts / housing</a><a href="#">housing swap</a><a href="#">office / commercial</a><a href="#">parking / storage</a><a href="#">real estate for sale</a><a href="#">rooms / shared</a><a href="#">rooms wanted</a><a href="#">sublets / temporary</a><a href="#">vacation rentals</a><a href="#">wanted: apts</a><a href="#">wanted: real estate</a><a href="#">wanted: sublet / temp</a>
</div>
</section>
<section className="category-section mt-3">
<h2><img src="/autos-icon.png" alt="" /> <a href="#">autos</a></h2>
<div className="two-col-links">
<div><a href="#">atv / utv / sno</a><a href="#">auto parts</a><a href="#">aviation</a><a href="#">boat parts</a><a href="#">boats</a><a href="#">cars + trucks</a></div>
<div><a href="#">heavy equip</a><a href="#">motorcycle parts</a><a href="#">motorcycles</a><a href="#">rvs + camp</a><a href="#">trailers</a><a href="#">wheels + tires</a></div>
</div>
</section>
<section className="category-section mt-3">
<h2><img src="/forsale-icon.png" alt="" /> <a href="#">for sale</a></h2>
<div className="two-col-links">
<div><a href="#">antiques</a><a href="#">appliances</a><a href="#">arts + crafts</a><a href="#">baby + kid</a><a href="#">barter</a><a href="#">beauty + hlth</a><a href="#">bike parts</a><a href="#">bikes</a><a href="#">books</a><a href="#">business</a><a href="#">cds / dvd / vhs</a><a href="#">cell phones</a><a href="#">clothes + acc</a><a href="#">collectibles</a><a href="#">computer parts</a><a href="#">computers</a><a href="#">electronics</a></div>
<div><a href="#">farm + garden</a><a href="#">free</a><a href="#">furniture</a><a href="#">garage sale</a><a href="#">general</a><a href="#">household</a><a href="#">jewelry</a><a href="#">materials</a><a href="#">music instr</a><a href="#">photo + video</a><a href="#">sporting</a><a href="#">tickets</a><a href="#">tools</a><a href="#">toys + games</a><a href="#">video gaming</a><a href="#">wanted</a></div>
</div>
</section>
</div>
<div className="col-md-4">
<section className="category-section">
<h2><img src="/jobs-icon.png" alt="" /> <a href="#">jobs</a></h2>
<div className="one-col-links job-links">
<a href="#">accounting + finance</a><a href="#">admin / office</a><a href="#">arch / engineering</a><a href="#">art / media / design</a><a href="#">biotech / science</a><a href="#">business / mgmt</a><a href="#">customer service</a><a href="#">education</a><a href="#">etc / misc</a><a href="#">food / bev / hosp</a><a href="#">general labor</a><a href="#">government</a><a href="#">human resources</a><a href="#">legal / paralegal</a><a href="#">manufacturing</a><a href="#">marketing / pr / ad</a><a href="#">medical / health</a><a href="#">nonprofit sector</a><a href="#">real estate</a><a href="#">retail / wholesale</a><a href="#">sales / biz dev</a><a href="#" className="selected-link">security</a><a href="#">skilled trade / craft</a><a href="#">software / qa / dba</a><a href="#">systems / network</a><a href="#">technical support</a><a href="#">transport</a><a href="#">tv / film / video</a><a href="#">web / info design</a><a href="#">writing / editing</a>
</div>
</section>
<section className="category-section mt-3">
<h2><img src="/gigs-icon.png" alt="" /> <a href="#">gigs</a></h2>
<div className="two-col-links">
<div><a href="#">computer</a><a href="#">creative</a><a href="#">crew</a><a href="#">domestic</a></div>
<div><a href="#">event</a><a href="#">labor</a><a href="#">talent</a><a href="#">writing</a></div>
</div>
</section>
<section className="category-section mt-3">
<h2><img src="/resumes-icon.png" alt="" /> <a href="#">resumes</a></h2>
</section>
</div>
</div>
  );
}

function RightSidebar() {
  return (
<aside className="col-auto right-rail">
<div className="px-2 pt-3">
<select className="form-select form-select-sm language-select" aria-label="language">
<option>english</option>
<option>español</option>
<option>français</option>
</select>
</div>
<div className="right-links text-center">
<a href="#">us cities</a><a href="#">us states</a><a href="#">ca cities</a><a href="#">ca provs</a><a href="#">cl worldwide</a>
</div>
</aside>
  );
}

export default function Home() {
  return (
    <div className="page-shell container-fluid px-0">
      <div className="row g-0 site-grid">
        <LeftSidebar />
        <main className="col main-area">
          <LocationNavigation />
          <CategorySections />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}
