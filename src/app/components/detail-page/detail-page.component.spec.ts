import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailPageComponent } from './detail-page.component';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;
  const testContact = {
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
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPageComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    window.history.pushState({ selectContact: testContact}, '');
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
