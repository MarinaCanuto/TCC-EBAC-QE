import { $, driver } from '@wdio/globals'

class CatalogoPage {

  get tituloLoja() {
    return $('android=new UiSelector().text("EBAC Store")')
  }

  get campoBusca() {
    return $('android=new UiSelector().text("Search Products")')
  }

  async validarTelaCatalogo() {
    await this.tituloLoja.waitForDisplayed({ timeout: 15000 })
    await expect(this.tituloLoja).toBeDisplayed()
    await expect(this.campoBusca).toBeDisplayed()
  }

  async scrollCatalogo() {
    await driver.execute('mobile: scrollGesture', {
      left: 100,
      top: 500,
      width: 800,
      height: 1200,
      direction: 'down',
      percent: 0.8
    })
  }
}

export default new CatalogoPage()