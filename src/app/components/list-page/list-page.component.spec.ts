import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddressBookService } from 'src/app/services/address-book.service';
import { ListPageComponent } from './list-page.component';
import { of } from 'rxjs';


describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;
  const addressBookServiceSpy = jasmine.createSpyObj<AddressBookService>(['getContacts']);


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ ListPageComponent ],
      imports: [ RouterTestingModule ],
      providers: [ {provide: AddressBookService, useValue: addressBookServiceSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const testContactResponse = {
      info: { seed: 'nuvalence', results: 2, page: 1, version: '1.4' },
      results: [
        {
          gender: 'male',
          name: { title: 'Mr', first: 'Stanimir', last: 'Anđelković' },
          location: {
            street: { number: 5323, name: 'Milene Čupić' },
            city: 'Arilje',
            state: 'South Bačka',
            country: 'Serbia',
            postcode: 26051,
            coordinates: { latitude: '62.8111', longitude: '-131.7543' },
            timezone: { offset: '+9:30', description: 'Adelaide, Darwin' },
          },
          email: 'stanimir.andelkovic@example.com',
          login: {
            uuid: 'c0e880c2-c889-430d-8683-6d86301db968',
            username: 'orangeduck462',
            password: 'goodtime',
            salt: 'XIHKobYU',
            md5: '9e442b545fbedcb71c476cc7f9f54da6',
            sha1: '64202cc27f5094c5c50039db52cd2a973b3b1b69',
            sha256:
              'd38f1ef16d9ef7460b2b38ff548c179f6666ea22931678eec008d152f1802a94',
          },
          dob: { date: '1994-01-14T03:24:22.000Z', age: 28 },
          registered: { date: '2012-08-01T14:53:33.254Z', age: 10 },
          phone: '010-0866-457',
          cell: '063-8165-153',
          id: { name: 'SID', value: '535843832' },
          picture: {
            large: 'https://randomuser.me/api/portraits/men/43.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/43.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/43.jpg',
          },
          nat: 'RS',
        },
        {
          gender: 'male',
          name: { title: 'Mr', first: 'Samuel', last: 'Vicente' },
          location: {
            street: { number: 9556, name: 'Calle de Segovia' },
            city: 'Guadalajara',
            state: 'Comunidad Valenciana',
            country: 'Spain',
            postcode: 31938,
            coordinates: { latitude: '-89.0358', longitude: '11.5328' },
            timezone: {
              offset: '-3:00',
              description: 'Brazil, Buenos Aires, Georgetown',
            },
          },
          email: 'samuel.vicente@example.com',
          login: {
            uuid: '30e55aa4-01fb-441c-942c-485a45c6fb75',
            username: 'lazysnake317',
            password: '963852',
            salt: 'zxldCN2i',
            md5: 'c8a4250ef982fd5d844b087a1cf7477c',
            sha1: 'cb7b054ccc4eb16bf1173e88306279473b410566',
            sha256:
              '107c1c70d9c40b1746b711d76c0f0c57d2ccbee9979789f7796e7ab16b92c94a',
          },
          dob: { date: '1962-01-12T08:32:25.698Z', age: 60 },
          registered: { date: '2009-07-08T14:49:47.530Z', age: 13 },
          phone: '988-975-363',
          cell: '693-965-443',
          id: { name: 'DNI', value: '87201294-A' },
          picture: {
            large: 'https://randomuser.me/api/portraits/men/13.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/13.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/13.jpg',
          },
          nat: 'ES',
        },
      ],
    };
    fixture = TestBed.createComponent(ListPageComponent);
    addressBookServiceSpy.getContacts.and.returnValue(of(testContactResponse));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
