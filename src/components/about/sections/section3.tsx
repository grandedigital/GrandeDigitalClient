"use client";
import { useResponsiveAnimation } from "@/hooks/useResponsiveAnimation";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Section3() {
  const shouldAnimate = useResponsiveAnimation(1217);

  const areaRef = useRef(null);

  const areaViewArea = useInView(areaRef, {
    once: true,
    amount: 0.1,
  });

  if (!shouldAnimate) {
    return (
      <section className="pb-0 max-2xl:pt-[90px] max-mdx:pt-[75px] max-md:pt-[70px]">
        <div className="custom-container">
          <div ref={areaRef} className="row">
            <div className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[41.66666667%] max-mdx:mb-[10px]">
              <h2 className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-[30px] max-md:mb-[25px]">
                İyi bir ekip, harika işler demek. Biz de size en iyisini sunmak
                için
                <span className="shadow-none inline-block transition-shadow duration-500 ease-[cubic-bezier(.7,0,.3,1)] relative pb-0 mb-0">
                  {" buradayız."}
                  <span className="h-[45px] bottom-[-10px] -z-1 float-left w-full absolute left-0">
                    <img
                      src="/images/demo-digital-agency-highlight-separator.webp"
                      className="h-[45px] w-full absolute left-0 bottom-0 transition-none max-w-full"
                      alt=""
                    />
                  </span>
                </span>
              </h2>
            </div>
            <div className="transition-none px-[15px] w-full max-w-full mdx:w-[58.33333333%] mdx:flex-[0_0_auto]">
              <div className="row">
                <div className="px-[15px] w-full max-w-full md:w-[41.66666667%] md:flex-[0_0_auto]">
                  <div className="font-semibold w-[90%] text-[--dark-gray2] text-[19px] max-xxl:w-full max-md:mb-[10px]">
                    Web Tasarımı ve Geliştirme
                  </div>
                </div>
                <div className="px-[15px] w-full max-w-full md:w-[58.33333333%] md:flex-[0_0_auto]">
                  <p className="mb-0 mt-0">
                    Küçük ölçekli girişimlerden büyük çaplı projelere kadar, her
                    tür ihtiyaç için özel web çözümleri sunuyor ve gerçek
                    dünyada uygulanabilir, etkili web tasarımları
                    geliştiriyoruz.
                  </p>
                </div>
              </div>
              <div className="my-[40px] border-[--extra-medium-gray] h-[1px] border-b max-md:my-[30px]"></div>
              <div className="row">
                <div className="px-[15px] w-full max-w-full md:w-[41.66666667%] md:flex-[0_0_auto]">
                  <div className="font-semibold w-[90%] text-[--dark-gray2] text-[19px] max-xxl:w-full max-md:mb-[10px]">
                    Yazılım Geliştirme
                  </div>
                </div>
                <div className="px-[15px] w-full max-w-full md:w-[58.33333333%] md:flex-[0_0_auto]">
                  <p className="mb-0 mt-0">
                    Her ölçekteki projeye özel, yüksek verimli ve ölçeklenebilir
                    yazılım çözümleri geliştirmek için çalışıyor, iş süreçlerini
                    dijital dünyada güçlendiren özelleştirilmiş yazılımlar
                    sunuyoruz.
                  </p>
                </div>
              </div>
              <div className="my-[40px] border-[--extra-medium-gray] h-[1px] border-b max-md:my-[30px]"></div>
              <div className="row">
                <div className="px-[15px] w-full max-w-full md:w-[41.66666667%] md:flex-[0_0_auto]">
                  <div className="font-semibold w-[90%] text-[--dark-gray2] text-[19px] max-xxl:w-full max-md:mb-[10px]">
                    Mobil Uygulama Geliştirme
                  </div>
                </div>
                <div className="px-[15px] w-full max-w-full md:w-[58.33333333%] md:flex-[0_0_auto]">
                  <p className="mb-0 mt-0">
                    Farklı platformlarda çalışabilen, kullanıcı dostu ve yüksek
                    performanslı mobil uygulamalar geliştirmek için çaba
                    harcıyor, her ihtiyaca yönelik yenilikçi mobil çözümler
                    sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-0 max-2xl:pt-[90px] max-mdx:pt-[75px] max-md:pt-[70px]">
      <div className="custom-container">
        <div ref={areaRef} className="row">
          <div className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[41.66666667%] max-mdx:mb-[10px]">
            <motion.h2
              initial={shouldAnimate && { translateY: 15, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: areaViewArea ? 0 : 15,
                  opacity: areaViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0 }}
              className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-[30px] max-md:mb-[25px]"
            >
              İyi bir ekip, harika işler demek. Biz de size en iyisini sunmak
              için
              <span className="shadow-none inline-block transition-shadow duration-500 ease-[cubic-bezier(.7,0,.3,1)] relative pb-0 mb-0">
                {" buradayız."}
                <span className="h-[45px] bottom-[-10px] -z-1 float-left w-full absolute left-0">
                  <img
                    src="/images/demo-digital-agency-highlight-separator.webp"
                    className="h-[45px] w-full absolute left-0 bottom-0 transition-none max-w-full"
                    alt=""
                  />
                </span>
              </span>
            </motion.h2>
          </div>
          <div className="transition-none px-[15px] w-full max-w-full mdx:w-[58.33333333%] mdx:flex-[0_0_auto]">
            <motion.div
              initial={shouldAnimate && { translateY: 15, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: areaViewArea ? 0 : 15,
                  opacity: areaViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0 }}
              className="row"
            >
              <div className="px-[15px] w-full max-w-full md:w-[41.66666667%] md:flex-[0_0_auto]">
                <div className="font-semibold w-[90%] text-[--dark-gray2] text-[19px] max-xxl:w-full max-md:mb-[10px]">
                  Web Tasarımı ve Geliştirme
                </div>
              </div>
              <div className="px-[15px] w-full max-w-full md:w-[58.33333333%] md:flex-[0_0_auto]">
                <p className="mb-0 mt-0">
                  Küçük ölçekli girişimlerden büyük çaplı projelere kadar, her
                  tür ihtiyaç için özel web çözümleri sunuyor ve gerçek dünyada
                  uygulanabilir, etkili web tasarımları geliştiriyoruz.
                </p>
              </div>
            </motion.div>
            <div className="my-[40px] border-[--extra-medium-gray] h-[1px] border-b max-md:my-[30px]"></div>
            <motion.div
              initial={shouldAnimate && { translateY: 15, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: areaViewArea ? 0 : 15,
                  opacity: areaViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="row"
            >
              <div className="px-[15px] w-full max-w-full md:w-[41.66666667%] md:flex-[0_0_auto]">
                <div className="font-semibold w-[90%] text-[--dark-gray2] text-[19px] max-xxl:w-full max-md:mb-[10px]">
                  Yazılım Geliştirme
                </div>
              </div>
              <div className="px-[15px] w-full max-w-full md:w-[58.33333333%] md:flex-[0_0_auto]">
                <p className="mb-0 mt-0">
                  Her ölçekteki projeye özel, yüksek verimli ve ölçeklenebilir
                  yazılım çözümleri geliştirmek için çalışıyor, iş süreçlerini
                  dijital dünyada güçlendiren özelleştirilmiş yazılımlar
                  sunuyoruz.
                </p>
              </div>
            </motion.div>
            <div className="my-[40px] border-[--extra-medium-gray] h-[1px] border-b max-md:my-[30px]"></div>
            <motion.div
              initial={shouldAnimate && { translateY: 15, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: areaViewArea ? 0 : 15,
                  opacity: areaViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              className="row"
            >
              <div className="px-[15px] w-full max-w-full md:w-[41.66666667%] md:flex-[0_0_auto]">
                <div className="font-semibold w-[90%] text-[--dark-gray2] text-[19px] max-xxl:w-full max-md:mb-[10px]">
                  Mobil Uygulama Geliştirme
                </div>
              </div>
              <div className="px-[15px] w-full max-w-full md:w-[58.33333333%] md:flex-[0_0_auto]">
                <p className="mb-0 mt-0">
                  Farklı platformlarda çalışabilen, kullanıcı dostu ve yüksek
                  performanslı mobil uygulamalar geliştirmek için çaba harcıyor,
                  her ihtiyaca yönelik yenilikçi mobil çözümler sunuyoruz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
