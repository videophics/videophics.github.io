import { useEffect, useState } from "react";

function TableOfContents() {
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const headings = Array.from(
      document
        .querySelector("._blog-body")
        .querySelectorAll("h1, h2, h3, h4, h5, h6")
    );
    const tocItems = headings.map((heading) => {
      const text = heading.textContent;
      const slug = text.toLowerCase().replace(/ /g, "-");
      heading.id = slug;
      const level = parseInt(heading.tagName.replace("H", ""), 10);
      return { slug, text, level };
    });
    setToc(tocItems);
  }, []);

  return (
    <div className="text-[17px] leading-7 font-[400] text-white">
      <ul id="table-of-contents" className="border-l border-[rgba(255,255,255,0.2)] pl-1">
        {toc.map(({ slug, text, level }) => (
          <li key={slug} style={{ paddingLeft: `${(level - 1) * 10}px` }} className="hover:hover:text-gray-400">
            <a href={`#${slug}`}><span className="text-gray-400">#</span> {text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
