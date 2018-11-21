import { Injectable } from '@angular/core';

//#region NOTES FOR USERMANAGER AND USER
  /**
   * UserManager take care of handling the interaction with the Identity Provider and
   * parsing the response for us,
   * User as the name implies is the User object contaning the claims we get back
   * from the Identity Provider.
   */
//#endregion

import { UserManager, User } from 'oidc-client';
import { environment } from '../../environments/environment';

@Injectable()
export class OpenIdConnectService {

  private userManager: UserManager = new UserManager(environment.openIdConnectSettings);
  private currentUser: User;

  get userAvailable() {
    return this.currentUser != null;
  }

  get user(): User {
    return this.currentUser;
  }

  constructor() {
    this.userManager.clearStaleState();

    //#region NOTES FOR THE EVENTS
    /**
     * The event is trigger when the user has been loaded; on
     * initialization the user Manager will try to load the user from
     * an ID token it may have gotten from a previous session.
     * In that case we want to save the user on our user object so we
     * can access it when needed.
     * Whenever a successful authentication request happen the addUserLoaded
     * event will be triggered as well then we also want to save our user.
     *
     */
    //#endregion
    this.userManager.events.addUserLoaded(user => {
      if(!environment.production){
        console.log(`user loaded: ${user}`);
      }
      this.currentUser = user;
    })
  }


  // We create an authentication
  // request to the identity provider
  triggerSignIn() {
    this.userManager.signinRedirect()
      .then(function() {
        if (!environment.production) {
          console.log(`Redirection to signin triggered`);
        }
      });
  }

  /**
   * When redirect is successful we end up in
   * the callback page, on that page the token
   * must be fetched from the URI, prased and
   * validated, done by the user Manager as
   * follows.
   */
  handleCallBack() {
    this.userManager.signinRedirectCallback()
      .then(function(user){
        if(!environment.production){
          console.log(`Callback after signin handler: ${user}`);
        }
      })
  }
}
