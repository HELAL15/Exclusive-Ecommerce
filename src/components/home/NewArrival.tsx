import { FC, memo } from "react";
import SecTitle from "../global/SecTitle";
import { Link } from "react-router-dom";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const NewArrival: FC<IProps> = ({  }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between">
            <SecTitle title="featured" subTitle="new arrival" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary aspect-[4/4] relative rounded-[4px] ">
              <img src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aw9Vv6uUP64fCYxBuzXX4l2PZva3JCN2~0Xnik99joospBTkRkoREPVKttFaI4p8b-dldir3b1SO0QiZjfwuLqrXsPj55UdG3NHr7MIyrPD~2Jl8bjkWv0B2r4tAY2WdS4IZD1Hd02F3lm0OIDMLszBi-nUioWDXetd91Z7tjpMzOscH7uMgSMagWx6RTuvotlHIu1eM~mS4IIajWDnDsYM272tVeivavA62FUMbck2A1AqdiPlxDGOuuR7Xyf4axbOtpJpzisj9Z4HjFN8Gu3Hq0ByIym84DrGQahnObglu3Uv~fc2BhNanviu6-7Euwm5jIV9XhywHO76ggjijBw__" alt="featured1" className="w-full h-full object-cover" />
              <div className="details absolute bottom-0 left-0 px-6 py-8 space-y-2">
                <h3 className="text-lg text-white font-semibold">PlayStation 5</h3>
                <p className="text-sm text-white/70 w-full md:max-w-[250px]">Black and White version of the PS5 coming out on sale.</p>
                <Link className="text-primary-white underline  block" to={'/'} >shop now</Link>
              </div>
            </div>
            <div className="grid md:grid-rows-2 gap-6 md:aspect-[4/4] ">
              <div className="bg-primary relative rounded-[4px] overflow-hidden">
                <img src="https://s3-alpha-sig.figma.com/img/455c/8d64/08463f7e8f57dd3048a2444dbfa0cb90?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qqQyvMe-x8wks7MspJugfUmWln19cBi-urv5xtpOU5jFYGqFO0WiwLlaXEU3EWbX7YsMJ5j~~q0~5XzKuRYR5ULcrGp3cfRKK2jUqj~1cMk2p7GjqfPKJ8mHT-XLQR1IdhRrC2JK2VmYssbxFvkYvE6FFZj3JZxjjWq2gx9VcyOBWODosD-3VJHJMeNWyLagBgWkZIKSHzhnNzHMgkuOuxUBAO82FsIthHU2ZP1gUT8jHhojkav1ewjI0kK1c1ZBH9x8ivh6rtfFuNTm1K9WNBVQQX0dfVMQN-bCOpk-a0JFiqJBUtI4mNw8eC6K2ZfHXawfQfXiMy4~IZZnvHZvgw__" alt="featured1" className="w-full h-full object-fill " />
                <div className="details absolute bottom-0 left-0 px-6 py-8 space-y-2">
                <h3 className="text-lg text-white font-semibold">Women’s Collections</h3>
                <p className="text-sm text-white/70 w-full md:max-w-[250px]">Featured woman collections that give you another vibe.</p>
                <Link className="text-primary-white underline  block" to={'/'} >shop now</Link>
              </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary relative rounded-[4px]">
                  <img src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BcoR2y7jdbo-TmqnMjYihmssDkY~~AJTvLEiET625kEoTl1YrTUaborOv~MiyZ6EFWQDV7ls1G7pv~hy70dJURYl6pqjidNyn6FkXASH2~WA~GLQvaIIBbHiqiVvBF6NxjPaGR176j4an5825hMrpULAxQCoO3q2uVdb22FsDwAhA-W0hfbPlIr9BwwqtclWXtfgkZPauo~iJtdUPLt5qtBLHBqU-YR2gbwUDCJK85pMNsPTkeUudf3gwgs-qYgQtepIJSvjn06d1Zok5Sow3Zqri~stV8bv4LJ~jhlFypY2orvRgoL5-bMNwkuDofGyYjkKKwzRIisZaNK1g~Y4dg__" alt="featured1" className="w-full h-full object-fill" />
                  <div className="details absolute bottom-0 left-0 px-6 py-8 space-y-2">
                <h3 className="text-lg text-white font-semibold">Speakers</h3>
                <p className="text-sm text-white/70 w-full md:max-w-[250px]">Amazon wireless speakers</p>
                <Link className="text-primary-white underline  block" to={'/'} >shop now</Link>
              </div>
                </div>
                <div className="bg-primary relative rounded-[4px]">
                  <img src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJ43xKmo9N~gXCq1XbOeMx-IYPys-IUSXkIXnmC2gpI~N1g3ZUhh6nLVJ41XYbYElYqLdRLHaSyUFlCJQunthwxGFguVZVeuXLGm-Ga2srFwlpeqc2xCdEXfLoozaUBSHOLcSJyx~LY-GO8rrpPRyVza0opy7rzwv6IZeNTIgqLdJbubXrQFSYqNhfNrYMHwgUnkv-a6XmBwrRoAkBzD-53vOBTesi1-j2wbjD2K23d-YVBbMpjKHjnrATJ3nUEDKPfWWwQbqFAHheEII9C5C6VDMl4ZRMys~8hO6132RkS~Rfc4Vbqia5n7tNfsnk7nsD~VKQ~0cLwB3vHj4ScBuA__" alt="featured1" className="w-full h-full object-fill" />
                  <div className="details absolute bottom-0 left-0 px-6 py-8 space-y-2">
                <h3 className="text-lg text-white font-semibold">Perfume</h3>
                <p className="text-sm text-white/70 w-full md:max-w-[250px]">GUCCI INTENSE OUD EDP</p>
                <Link className="text-primary-white underline  block" to={'/'} >shop now</Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(NewArrival);