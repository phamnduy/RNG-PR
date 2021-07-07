import { useMediaQuery } from 'react-responsive'

export const screen = {
  width: {
    desktop: 1200,
    tablet: 768,
    mobile: 480
  }
}

const useResponsive = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${screen.width.desktop}px)`
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${screen.width.desktop}px)` })
  const isTablet = useMediaQuery({ query: `(max-width: ${screen.width.tablet}px)` })
  const isMobile = useMediaQuery({ query: `(max-width: ${screen.width.mobile}px)` })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return {
    isBigScreen,
    isDesktopOrLaptop,
    isMobile,
    isTabletOrMobile,
    isTablet,
    isPortrait,
    isRetina
  }
}

export default useResponsive