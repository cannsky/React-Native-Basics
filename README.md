# Marmara Computer Science Engineering Club React Native Basics.

**Framework:** Programlama diline önceden tanımlanmış fonksiyon ve classların eklenmesiyle programlama dilinin işlevini değiştiren yapılara framework denir.

**Kütüphane:** Önceden tanımlı class ve fonksiyonların bulunduğu dosyalara kütüphane denir.

**Çapraz Platform:** Aynı anda birden fazla platform’a yazılım geliştirme işlemine denir.

## React Native Nedir?

**React Native** çapraz platform desteği sunan bir mobil uygulama geliştirme frameworküdür.

## React Native Nasıl Ortaya Çıktı?

**React Native** ortaya çıkmadan önce **Facebook** kendi web sitelerini geliştirirken arayüz konusunda sürekli artan kodlardan ve sunucuda oluşan yüklerden pek memnun değildi.

**React.js** adındaki framework’ü yayınlayan *Facebook* aslında ilk başlarda websitelerindeki arayüzü daha hızlı render edebilmek ve sunuculardaki iş yükünü azaltmak için bu framework’ü yayınladı.

Aradan geçen zaman içerisinde *React* kullanım kolaylığı sayesinde çoğu yazılımcı ve şirket tarafından kullanılmaya başladı.

**React** kısaca, ilk başlarda arayüz geliştirmek için oluşturulmuş, **Node Package Manager’e** bağlı bir framework’tür.

## Uygulamaların Back-End’inde React Native?

İlk başlarda sadece tasarımı ayarlamak amaçlı olsa da **Node Package Manager** sayesinde yeni kütüphaneler geliştiren diğer topluluk geliştiricileri arka plan kodlarını da eklemeye başladılar. Örneğin, Arkaplan işlemleri, Sunucudan veri alma, Bildirim Yollama gibi.

## Sonuç Olarak

**React Native** geliştirme süreciyle beraber günümüzde çok daha güçlü bir framework haline gelmiş olup herkes tarafından kullanabilir bir durumdadır.

## React Native Welcome Screen App
**React Native’deki** ilk yapacağımız uygulama bir welcome screen uygulaması olacak.

Uygulamamız açıldığında ekranda sadece Welcome to My App yazısını yazacağız.

Şimdi biraz syntax’i inceleyelim,

```
import React from 'react';
import {
	View
	Text
} from 'react-native';

export default class App extends Component{
	<View>
		<Text>Welcome to React Native</Text>
	</View>
}
```

## Importing Components
```
import React from 'react';
import {
	View
	Text
} from 'react-native';
```

Import dışarıdan ekleyeceğimiz kütüphaneleri eklemek için kullandığımız bir javascript terimidir.

Import ile **React’in** kullanması gereken kütüphaneleri ekliyoruz.

**React** bizim componentimiz ve bu componentimiz react pathimizde bulunuyor.

**React** **Componentimizi** uygulama içerisinde nasıl kullandığımıza bakalım.

Aslında kullandığımız **React.Component** kullanarak burada App adında yeni bir class oluşturuyoruz ve bunun super class’ı olarak da **React** kütüphanesini gösteriyoruz.

Yani aslında **Component** yerine **React.Component** de yazabiliriz gibi düşünebilirsiniz. Ama yazmak zorunda değilsiniz. **React** bunu kendisi ayarlayabiliyor.

**React-Native** ile de uygulamamız da kullanacağımız componentleri import ediyoruz. Örnek: **Text**, **View** vb.

## Classımızı Oluşturarak Ekranda Hoş Geldin Mesajı Görüntülemek
```
export default class App extends Component{
	<View>
		<Text>Welcome to React Native</Text>
	</View>
}
```

**Export** kullanarak aslında oluşturduğumuz **App** classını dışarıya export ediyoruz. Burada yaptığımız şey, **React’in** kendisine **App** classımızı göstermek.

Aslında **App**, **Main** fonksiyonuna çok benzer, **React’in** ilk çalıştırdığı yazdığınız kod **App Class’ı** olacak.

Eğer **Main** fonksiyonunu bilmiyorsanız, main fonksiyonu programlama dillerinde ilk çalıştırılan fonksiyondur.

## View Ne İşe Yarıyor?
**View** aslında yazı yazmadan ya da herhangi bir **Component’i** koymadan önce koymamız gereken bir bileşendir.

**View** genel olarak değişik **Component’lerin** beraber durmasını sağlar ve stil uygulanabilir.

**StyleSheetler** ile **View’in** tasarımını değiştirebilirsiniz.

## Component Nedir
**Componentler** çeşitli kütüphaneleri kullanarak eklediğimiz uygulama bileşenleridir.

Örnek: `<Text>Bu bir yazı.</Text>`

**Componentler** çeşitli değişkenleri parametre olarak alabilirler. Detaylı bilgi için **React Native’in** **Componentlerine** bakabilirsiniz.

## Kütüphaneler Nedir? Neden Kullanılır
**React’in** temel kütüphanelerinin yanında bazı faydalı kütüphaneler de vardır, Örneğin: *[React Native Navigation]*(https://reactnavigation.org/)

Bu kütüphaneler ile **React** ile daha iyi uygulamalar yapabilirsiniz.

Örnek verecek olursak, **React’te** sayfalar arası geçiş sağlamak için navigation sistemi yoktur ama *React Native Navigation* kullanarak navigasyon sisteminizi yazabilirsiniz.
