import React, { memo } from 'react'
import RefreshIcon from '../../../assests/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components/'
import COUNTRIES from '../../../common/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const naviqatorHasShare = navigator.share

function Panel({ updateAt, OnChargem, data, conutry, getConviddata }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} valeu={country.valeu}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`pais-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )
  const textConvid19 = `Pais: ${country}-recuperados: ${recovered}`

  const shareInfo = () =>{
    navigator.share({
      title:`Dados do convid19 - ${country}`,
      text: textConvid19,
      url: 'http//git' 
    })
  }
  const renderShareButton = (
    <div>
      <Button variant='container' color='primary' onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const copyInfo = ()=>{
    navigator.clipboard.writeText(textConvid19)
  }

  const renderCopyButton = (
    <div>
      <Button variant='container' color='primary' onClick={copyInfo}>
        copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant='h5' component='span' color='primary'>
            COVID19</Typography>
          <Typography variant='h5' component='span' color='primary'>
            Panel conronavirus</Typography>
          <Typography variant='h5' component='span' color='primary'>
            atualizado em:{upsateAt}</Typography>
            <div className='pt-2'>
                <Select OnCharge={OnCharge} valeu={country}>
                  {COUNTRIES.map(renderCountries)}
                </Select>
            </div>
        </div>
        {navigatorHasShare ? renderShareButton:renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )

}

export default memo(Panel)